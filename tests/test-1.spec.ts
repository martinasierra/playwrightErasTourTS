
/*  DRAFT !!!!!!!!!!
  await page.getByRole('button', { name: 'Playlist' }).click();
  await expect(page.locator('body')).toContainText('Playlist Creator');
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Film' }).click();
  const page3 = await page3Promise;
  await page.getByRole('button', { name: 'Home' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('banner').getByRole('link').click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('banner').getByLabel('facebook').click();
  const page5 = await page5Promise;
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('banner').getByLabel('instagram').click();
  const page6 = await page6Promise;
});

*/