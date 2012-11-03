
build:
	@browserbuild -d -g Math -m math -b lib/ lib > dist/math.js

test:
	@mocha

test-browser: build
	@serve . &
	@open http://localhost:3000/test
	
test-phantomjs: build
	@mocha-phantomjs test/index.html

.PHONY: build test test-browser test-phantomjs