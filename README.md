# demo_nginx

### nginx.default.conf (SSL)
```
server {
    listen 80;
    server_name myjob.id.vn;

    # Redirect all HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen       443 ssl;
    server_name  myjob.id.vn;

    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
        add_header Cache-Control "no-cache";
    }

    location /api {
        proxy_pass http://backend:8000;
    }
}

```
