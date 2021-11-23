make-ssl-certificate:
	docker run --rm certbot/certbot:v1.21.0 certonly --nginx
