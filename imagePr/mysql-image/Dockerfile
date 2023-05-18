
FROM mysql:5.7.26
ENV MYSQL_ROOT_PASSWORD: rootpassword
ENV MYSQL_DATABASE: News_Db
ENV MYSQL_USER: user
ENV MYSQL_PASSWORD: password

COPY ./schema.sql /docker-entrypoint-initdb.d/