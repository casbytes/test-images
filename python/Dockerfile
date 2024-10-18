FROM python:3.9.20-slim-bookworm

WORKDIR /srv/python
COPY . .

RUN chmod +x script.sh
ENTRYPOINT ["python3", "./script.py"]

