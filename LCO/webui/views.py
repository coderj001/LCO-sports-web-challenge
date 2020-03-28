from django.shortcuts import render

# Create your views here.

def index(req):
    return render(req,'index.html', {})

def about(req):
    return render(req,'about.html',{})

def tournament(req):
    return render(req,'tournament.html',{})

def video(req):
    return render(req,'video.html',{})

def faq(req):
    return render(req,'FAQ.html',{})

def team(req):
    return render(req,'team.html',{})

def login(req):
    return render(req,'login.html',{})
    
def QVB0U0lPR09oSmk(req):
    return render(req,'QVB0U0lPR09oSmk.html',{})