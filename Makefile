ACCOUNT=klotio
IMAGE=www
VERSION?=0.1
VOLUMES=-v ${PWD}/www/:/opt/klot-io/www/
PORT=8775

.PHONY: build shell run deploy

build:
	docker build . -f Dockerfile -t $(ACCOUNT)/$(IMAGE):$(VERSION)

shell:
	docker run -it $(VARIABLES) $(VOLUMES) $(ACCOUNT)/$(IMAGE):$(VERSION) sh

run:
	docker run -it --rm $(VOLUMES) -p 127.0.0.1:$(PORT):80 -h $(IMAGE) $(ACCOUNT)/$(IMAGE):$(VERSION)

deploy:
	scp etc/klot-io.conf root@klot.io:/etc/nginx/sites-available
	ssh root@klot.io "ln -sf /etc/nginx/sites-enabled/klot-io.conf /etc/nginx/sites-available/klot-io.conf"
	scp -r www root@klot.io:/opt/klot-io/
	ssh root@klot.io "service nginx reload"

login:
	ssh root@klot.io