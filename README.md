# fibonacciProject

How to start the fibonacciProject application
---
1. Run `mvn clean install` to build your application
2. Start application with `java -jar target/fibonacciProject-1.0-SNAPSHOT.jar server config.yml`
3. To check that your application is running enter url `http://localhost:8080`

How to start the React part application
---
1. The path has a folder front-end which has the react part of the code.
2. Open the folder path from visual studio code and on terminal, enter command npm start to rent the react part or using command promt navigae to the folder path and run npm start. (Note for the communication to happen between react and java, run the javaapplication running.)
3. To check that your application is running enter url `http://localhost:3000`

How to build and run the docker container
---
1. open command prompt from the java folder path and run command "docker build -t javaimage:version ."
2. open command propmt from the react folder pat and run command "docker build -t reactimage:version ."
3. To check if the images are created use "docker images" commad. This will list the images that are created.
4. To run the application use command "docker run javaimage:version".
