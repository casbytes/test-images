FROM python:3.9.20-slim-bookworm

WORKDIR /srv/python

COPY requirements.txt .

RUN python3 -m venv . && \
    ./bin/pip install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT ["./bin/python", "./script.py"]
