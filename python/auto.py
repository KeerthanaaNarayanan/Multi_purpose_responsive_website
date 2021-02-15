from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from os import path
basepath = path.dirname(__file__)


class Auto:
    def browser(self):
        self.browser_name = "chrome"
        self.kill_browser_sessions()
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--disable-extensions')
        chrome_options.add_argument('--disable-software-rasterizer')
        chrome_options.add_argument("--start-maximized")
        chrome_options.add_argument("--ignore-certificate-errors")
        chrome_options.add_argument('--remote-debugging-port=9222')
        chrome_options.add_argument("–-disable-dev-shm-usage")
        chrome_options.add_argument('window-size=1920x1080')
        capabilities = DesiredCapabilities.CHROME
        capabilities['applicationCacheEnabled'] = False
        webdriver_directory = path.abspath(path.join(basepath, "..", "..", "..", "input/webdrivers"))

        self.browser = webdriver.Chrome(webdriver_directory + "\chromedriver.exe",
                                        chrome_options=chrome_options, desired_capabilities=capabilities)
