JS = node
JFLAGS = 

TARGET = takeshi-nodejs-web.service
SRC	= ./server.js
OBJ =
DEP =

default:
	make restart

start: $(SRC)
	sudo systemctl start $(TARGET)

stop: $(SRC)
	sudo systemctl stop $(TARGET)

restart: $(SRC)
	sudo systemctl restart $(TARGET)

status: $(SRC)
	sudo systemctl status $(TARGET)

enable: $(SRC)
	sudo systemctl enable $(TARGET)

disable: $(SRC)
	sudo systemctl disable $(TARGET)

clean:
	make stop
	make disable

