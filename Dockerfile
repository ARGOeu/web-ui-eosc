FROM gitlab-registry.in2p3.fr/cc-in2p3-devops/lavoisier-wok:latest

WORKDIR /opt

RUN apk update && apk upgrade && apk add --no-cache bash git 
RUN git clone https://gitlab.in2p3.fr/cc-in2p3-dev/argo-eosc.git
RUN cp -R argo-eosc/etc/* etc
EXPOSE 8080/tcp

CMD ./bin/lavoisier-start-console.sh
