beforeAll(async () => {
  await page.goto('http://localhost:6969/typescript')
})

describe('UnderscoredAttributes', () => {
  test('context has types', async () => {
    await page.waitForSelector('[data-initiated]')
    const element = await page.$('[data-initiated]')
    expect(element).toBeTruthy()
  })

  test('context can be extended', async () => {
    await page.click('button[value="1"]')
    await page.waitForSelector('[data-count="2"]')
    const element = await page.$('[data-count="2"]')
    expect(element).toBeTruthy()
  })

  test('inner components work on nts files', async () => {
    await page.waitForSelector('[data-inner-component]')
    const element = await page.$('[data-inner-component]')
    expect(element).toBeTruthy()
  })

  test('bind should work on nts files', async () => {
    await page.waitForSelector('input')
    const element = await page.$('input')
    expect(element).toBeTruthy()
  })
})
