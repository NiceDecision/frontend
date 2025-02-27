FROM nginx:latest

# React 빌드 파일을 올바른 경로로 복사
COPY ./build /usr/share/nginx/html

# Nginx 설정 덮어쓰기
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# 80 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
