FROM openjdk:11

RUN mkdir /app
COPY pom.xml /app/pom.xml
COPY src /app/src
COPY config.yml /app/config.yml
COPY target/fibonacciProject-1.0-SNAPSHOT.jar /app/fibonacciProject-1.0-SNAPSHOT.jar
WORKDIR /app
EXPOSE 8080
CMD [ "java", "-jar", "/app/fibonacciProject-1.0-SNAPSHOT.jar", "server", "config.yml"]