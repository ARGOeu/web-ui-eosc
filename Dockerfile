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



RUN chgrp -R 0 /opt/argo-eosc && chmod -R g=u /opt/argo-eosc

RUN chmod g=u /etc/passwd
ENTRYPOINT [ "/opt/argo-eosc/uidentrypoint" ]
USER 1001
    

EXPOSE 8080/tcp
CMD mvn exec:java
