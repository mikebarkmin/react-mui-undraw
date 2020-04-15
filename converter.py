import requests
import time
import json
import os
import subprocess

undraw_api = "https://undraw.co/api/illustrations?page={}"
transform_api = "https://svg2jsx.com/api/transform"

transform_config = {"jsxSingleQuote": True, "memo": False, "type": "functional"}


def get_meta():
    illustrations = []
    page = 1
    hasMore = True
    while hasMore:
        print(f"Fetching Page {page}")
        r = requests.get(undraw_api.format(page))
        if r.status_code != 200:
            break

        response = r.json()
        illustrations += response.get("illustrations", [])
        page = response.get("nextPage")
        hasMore = response.get("hasMore")
        time.sleep(1)

    with open("illustrations.json", "w") as f:
        f.write(json.dumps(illustrations))

    return illustrations


def get_svgs():
    images = []
    with open("illustrations.json", "r") as f:
        illustrations = json.load(f)

        for illustration in illustrations:
            title = illustration["title"]
            image_url = illustration["image"]
            message = f"Fetch image {image_url}"
            image = requests.get(image_url)
            images.append(image.content)

            path = "illustrations/{}.svg".format(title.title().replace(" ", ""))

            if os.path.exists(path):
                message += " (cached)"
                continue

            with open(path, "wb") as f:
                f.write(image.content)
                message += " (new)"

            print(message)

            time.sleep(2)

    return images


def convert_svgs():
    subprocess.run(["svgr", "-d", "src", "illustrations"])


def create_index():
    for root, _, files in os.walk("src"):
        components = []
        for file in files:
            name = file.split(".")[0]
            if name[0].isdigit():
                name = "X" + name
            elif name == "React":
                name = "X" + name
            elif name == "index":
                continue
            components.append(name)
        components.sort()

        with open(os.path.join("src", "index.js"), "w") as out:
            for component in components:
                out.write('export %s from "./%s"\n' % (component, component))
            out.write("export default { %s }" % ",".join(components))
    subprocess.run(["prettier", "src/index.js", "--write"])


if __name__ == "__main__":
    print("What do you want to do?")
    print("[0]: Everything")
    print("[1]: Get Meta Data")
    print("[2]: Get SVGs")
    print("[3]: Convert SVGs")
    print("[4]: Create Index")

    choice = int(input("Number: "))

    if choice == 1 or choice == 0:
        get_meta()
    elif choice == 2 or choice == 0:
        get_svgs()
    elif choice == 3 or choice == 0:
        convert_svgs()
    elif choice == 4 or choice == 0:
        create_index()

