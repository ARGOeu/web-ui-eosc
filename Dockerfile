FROM java:8-alpine

ENV MAVEN_VERSION 3.5.4
ENV MAVEN_HOME /usr/lib/mvn
ENV PATH $MAVEN_HOME/bin:$PATH
WORKDIR /opt

RUN addgroup -S argo  && adduser -S -G argo argo 

RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  rm apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn

RUN apk update && apk upgrade && apk add --no-cache bash git 
RUN git clone https://gitlab.in2p3.fr/cc-in2p3-dev/argo-eosc.git



### Setup user for build execution and application runtime
ENV APP_ROOT=/opt/argo-eosc
ENV PATH=${APP_ROOT}/bin:${PATH} HOME=${APP_ROOT}

RUN chmod -R u+x ${APP_ROOT}/bin && \
    chgrp -R 0 ${APP_ROOT} && \
    chmod -R g=u ${APP_ROOT} /etc/passwd

### Containers should NOT run as root as a good practice
USER 10001
WORKDIR ${APP_ROOT}
    
ENTRYPOINT [ "uid_entrypoint" ]
EXPOSE 8080/tcp
CMD mvn exec:java
