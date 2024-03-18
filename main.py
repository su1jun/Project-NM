from fastapi import FastAPI, WebSocket
import pyautogui
import base64
import io
import asyncio

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        # 화면 캡처
        screenshot = pyautogui.screenshot()
        # 이미지를 base64 인코딩
        buffered = io.BytesIO()
        screenshot.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        # 웹소켓을 통해 클라이언트에 전송
        await websocket.send_text(img_str)
        # 화면 캡처 주기를 조정하기 위한 잠시 대기
        await asyncio.sleep(0.1)