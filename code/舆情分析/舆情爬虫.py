import urllib.request
from bs4 import BeautifulSoup
import  requests
import threading
import re
import time

def get_html_soup(url,encoding='gb2312',num_retries=2):#获取解编码后的HTML
    html = None
    try:
        response = urllib.request.urlopen(url, timeout = 100)
        html = response.read().decode(encoding = encoding, errors='ignore')
    except Exception as e:
        print(e, "please check your network situation")
        html= None
        if num_retries > 0:
            if hasattr(e,'code') and 500 <= e.code < 600:
                return get_html_soup(url,num_retries=1)
    try: 
        soup = BeautifulSoup(html)
    except AttributeError as e:
        return None
    return soup

def get_title_link(url):#获取新闻的标题和正文链接
    soup = get_html_soup(url)
    news_link = {}
    for i in range(1,4):
        print(i)
        if i ==1:
            url=url      
        if i>1:
            url=url+'&Page='+str(i)
        print(url)
        soup = get_html_soup(url)
        #print(soup)
        links= soup.find('div',{'class':'datelist'})
        links=links.findAll('a')
        for link in links:
            if link.get_text()!=None:
                news_link[link.get_text()] = link.get('href')
    return news_link
   
def get_news_body(url):#抓取新闻主体内容
    content_text = []
    soup=get_html_soup(url,encoding='utf-8')
    soup= soup.find('div',{'class':'article'})
    for content in soup.findAll('p'):
        p=content.get_text()
        content_text.append(p.strip())
    for i in range(0,len(content_text)):
        print(content_text)
        if i == 0:
            content_text[0]=content_text[0]
        content_text[0]+=content_text[i].strip()
    if content_text==[]:
        return soup.get_text()
    return content_text[0].strip()

########################################################################
national_news="http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllNewsStock.php?symbol=sz300705"
#获取新闻的标题和链接
national_news_list= get_title_link(national_news)
#获取新闻的内容主体并写入文件
#z=list(national_news_list.keys())
#y=z.index("69.7公里之外的视高 23年后将于成都紧紧相依")
fo = open('舆情.txt', "ab+") 
for x in national_news_list:
    print(x)
    print(national_news_list[x])
    paras = get_news_body(national_news_list[x])
    print(paras)
# 以二进制写入章节题目 需要转换为utf-8编码，否则会出现乱码
    for i in range(2017,2020):
        if str(i) in national_news_list[x]:
            fo.write(('%s'%str(i)).encode('utf-8'))
            break
    fo.write(('*+*').encode('utf-8'))
    fo.write((x).encode('utf-8'))  
# 以二进制写入章节内容
    fo.write((paras+'\r''\n').encode('utf-8'))  
fo.close()        #关闭小说文件
fo=open('舆情.txt',encoding='utf-8')
f=fo.read()
f=[i.strip() for i in f.split('\n') if i.strip()!='']
fo.close()
fo=open('舆情2.txt',mode='ab+')
a='\n'.join(f)
fo.write((a).encode('utf-8'))
fo.close()
print("All done, have a nice day")



