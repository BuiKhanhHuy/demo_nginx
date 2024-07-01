FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src ./src

CMD ["fastapi", "run", "src/main.py", "--host", "0.0.0.0", "--port", "8000", "--reload"]