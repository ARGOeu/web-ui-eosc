FROM java:8-alpine

ENV MAVEN_VERSION 3.5.4
ENV MAVEN_HOME /usr/lib/mvn
ENV PATH $MAVEN_HOME/bin:$PATH
USER argo

RUN groupadd -r argo -g 1000 && useradd -u 1000 -r -g argo -m -d /opt/argo -s /sbin/nologin -c "argo user" argo &&  chmod 755 /opt/argo

RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  rm apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn

RUN apk update && apk upgrade && apk add --no-cache bash git 
RUN git clone https://gitlab.in2p3.fr/cc-in2p3-dev/argo-eosc.git
RUN cp -R argo-eosc/etc/* etc
WORKDIR /opt/argo-eosc

EXPOSE 8080/tcp
CMD mvn exec:java 
