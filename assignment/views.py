from django.shortcuts import render
from django.http import JsonResponse

like_count = 0
dislike_count = 0

def home(request):
    return render(request, 'home.html', {'like_count': like_count, 'dislike_count': dislike_count})

def like(request):
    global like_count
    like_count += 1
    return JsonResponse({'likes': like_count})

def dislike(request):
    global dislike_count
    dislike_count += 1
    return JsonResponse({'dislikes': dislike_count})
