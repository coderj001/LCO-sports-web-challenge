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
    return render(req, 'FAQ.html', {})