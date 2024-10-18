FROM python:3.9.20-slim-bookworm

WORKDIR /srv/python

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT ["python3", "./script.py"]

