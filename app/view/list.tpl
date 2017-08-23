<html>
<head>
<title>Hacker news</title>
<link rel="stylesheet" href="/public/news.css" />
</head>
<body>
 <div class="news-view view">
 {% for item in list %}
 <div class="item">
    <a href="{{item.url}}">{{item.title}}</a>
    </div>
    {% endfor %}
</body>
</html>
