FROM python:3.9.20-slim-bookworm

WORKDIR /srv/python

COPY requirements.txt .

RUN python3 -m venv . && \
    ./bin/pip install --no-cache-dir -r requirements.txt

COPY . .

RUN source ./bin/activate

ENTRYPOINT ["./venv/bin/python", "./script.py"]
