install.packages("jiebaR")
library("jiebaR")

library(NLP)
library(tm)
#library(Rwordseg)
library(wordcloud2)
library(tmcn)


f <- scan('舆情.txt',sep='\n',what='',encoding="gbk")

wk <- worker(stop_word = '中文停用词表.txt')
seg <- wk[f]
seg <- seg[nchar(seg)>1]
seg <- table(seg) 
seg <- sort(seg,decreasing = T)[1:1000]
result1 <- as.data.frame(seg,stringsAsFactors=F)

write.csv(result1,"詞頻.csv")

#词云
wordcloud2(result1,backgroundColor = 'white',col = 'random-light')




#1、情感正向词，词组+打“+1”-label
pos <- read.csv("positive.txt", header = T, sep = " ", stringsAsFactors = F)
weight <- rep(1, length(pos[,1]))
pos <- cbind(pos, weight)

#colnames(pos)[1] <- "positive"
head(pos)

#2、情感负向词，词组+打“-1”-label
neg <- read.csv("negative.txt", header = T, sep = " ", stringsAsFactors = F)
weight <- rep(-1, length(neg[,1]))
neg <- cbind(neg, weight)

head(neg)


fun <- function(x,y) x%in% y
getEmotionalType <- function(x,pwords,nwords){
  pos.weight = sapply(llply(x,fun,pwords),sum)
  neg.weight = sapply(llply(x,fun,nwords),sum)
  total = pos.weight + neg.weight
  return(data.frame(pos.weight,neg.weight, total))
}
score <- getEmotionalType(result1, pos$word, neg$word)
##将原始数据与得分数据进行合并
evalu_score<- cbind(result1, score)
#evalu_score<-evalu_score[which(evalu_score$total!=0),],挑选分数非0的评论
evalu.score <- transform(evalu_score,emotion = ifelse(evalu_score$total> 0, 'Pos', 'Neg'))



write.csv(evalu.score, "情感分析结果.csv")          



#绘制直方图
tb<-summary(evalu.score)
emotion<-c("Neg","Pos")
Num<-c("515","270")
df<-cbind(emotion,Num)
df<-as.data.frame(df)
ggplot(df,aes(x=emotion,y=Num,color=Num))+geom_col()

library(ggplot2)




