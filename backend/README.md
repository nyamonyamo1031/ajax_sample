前提：
pythonインストール済みであること
pipが実行できること


## 1.backend階層に移動する

```
cd backend
```

## 2.仮想実行環境を作成する

```
python3 -m venv venv
```

backend階層にvenvフォルダが作成されるが、.gitignoreに記載されているのでgit管理外となる。
仮想実行環境はvenvとしているが、別名でも構わない。が別名にする場合は.gitignoreに記載する必要があるので、venvが無難

## 3.仮想実行環境を実行する
```
source ./venv/bin/activate
```
## 4.requirements.txtに記載あるライブラリをインストールする
```
pip install -r requirements.txt
```

## 5.実行する
```
python main.py
```
実行後、webサーバーが起動する


## 6仮想実行環境を離脱する
```
deactivate
```



## 7.仮想実行環境を離脱する
```
deactivate
```
```
