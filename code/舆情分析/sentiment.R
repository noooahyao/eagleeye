#——————————————————————————————————————————Sentiment---------------------------------
install.packages("readxl")
library(readxl)#读取数据

install.packages("plyr")
library(plyr)#文本处理

install.packages("psych")
library(psych)

write.csv(term.table,file = "word")
data1<-read.csv("word")
attach(data1)

k=length(data$X)
weight=rep(0,k)
score=rep(0,k)

data2<-cbind(data1,weight,score)

head(data2)


#读入主词典
my_dict<-read_xlsx("dic.xlsx")
head(my_dict)


#准备分词引擎
engine<-worker()
#将词典添加进引擎
new_user_word(engine, my_dict$词语)

install.packages("gsubfn")
install.packages("sqldf")
install.packages("proto")

library(gsubfn)
library(sqldf)
library("sqldf")

data3<-sqldf("SELECT*FROM data2 a LEFT JOIN my_dict b ON a.Var1=b.word")
colnames(data3)=c('no.','W',"freq","WEIGHT","score","word","weight")
data4<- data3[,c('no.','freq','score','word','weight')]
data5<-na.omit(data4)

FinalSC <- transform(data5,emotion = ifelse(data5$weight> 0, 'Pos', 'Neg'))

data6<-cbind(FinalSC)

write.csv(data6,"sentimentRST.csv")

#验证

set.seed(12)
validation <- FinalSC[sample(1:nrow(FinalSC),size = 10),]
validation[,c(4,6)]

#画图
tb<-summary(FinalSC)
emotion<-c("Neg","Pos")
Num<-c("139","224")
df<-cbind(emotion,Num)
df<-as.data.frame(df)
STMT<-ggplot(df,aes(x=emotion,y=Num,color=Num))+geom_col()

