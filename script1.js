document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("imageContainer");

    // 이미지 및 설명을 동적으로 생성하는 함수
    function createImage(src, description) {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        imageContainer.appendChild(overlay);

        const image = document.createElement("img");
        image.src = src;
        image.alt = "이미지";
        imageContainer.appendChild(image);

        const desc = document.createElement("p");
        desc.classList.add("image-description");

        // 개행 문자(\n)를 <br> 태그로 변환
        const lines = description.split("\n");
        for (const line of lines) {
            const lineElement = document.createElement("div");
            lineElement.textContent = line;
            desc.appendChild(lineElement);
        }

        imageContainer.appendChild(desc);

        container.appendChild(imageContainer);
    }

    // 예시 이미지와 설명을 추가
    createImage("pic1.PNG", "축종 개\n품종 믹스견\n털색 크림\n성별 암컷\n특징 쳐진 눈매가 귀여운 순한 강아지");
    createImage("pic2.PNG", "축종 고양이\n품종 한국 고양이\n털색 흰색\n성별 암컷\n특징 창고에서 발견");
    createImage("pic3.PNG", "축종 기타\n품종 토끼\n털색 흰색 검정\n성별 수컷\n특징 귀엽고 발랄한 얼룩무늬 토끼");
    createImage("pic4.PNG", "축종 개\n품종 믹스견\n털색 연갈색+흰색\n성별 수컷\n특징 넘 꼬질해서 목욕후.복실복실한털");
});
