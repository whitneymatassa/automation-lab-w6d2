const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

afterAll(async () => {
    await driver.quit()
})

test('I can search Google', async () => {

    let searchBar = await (await driver).findElement(By.name('q'))
    await searchBar.sendKeys('/*The thing you want to search on Google*/\n')
    await driver.sleep(2000)
    
    searchBar = await driver.findElement(By.name('search bar name'))
    await searchBar.clear()
    await searchBar.sendKeys('/*The string you want to search*/\n')
    await driver.sleep(2000) 
})