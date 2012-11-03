
# Test workshop at SHIFTBRAIN

SHIFTBRAIN 社で行われたテスト勉強会のコードです。

Mocha, PhantomJS, Browserbuild を使って Node, PhantomJS, ブラウザで同様のテストコードを走らせることを目的としました。

## Run test

Node の Mocha でテストを走らせる。

    $ make test

Node の Mocha の PhantomJS 経由でテストを走らせる。

    $ make test-phantomjs

ブラウザ上でテストを走らせる

    $ make test-browser

## TODO

* PhantomJS で未定義の変数を参照してテストが完走しない問題をどうにかしたい。