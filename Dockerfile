FROM nginx:latest
# React 빌드 결과물을 Nginx 웹 서버 루트로 복사
COPY ./dist /usr/share/nginx/html
# 기존 Nginx 기본 설정을 덮어씌움 (rm 삭제 불필요)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Nginx는 기본적으로 80 포트에서 실행됨
EXPOSE 80
# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
