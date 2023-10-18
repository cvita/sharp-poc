# Sharp POC

## Crop/Extract

A quick [example](./index.js) showing how Filestack's [crop](https://www.filestack.com/docs/api/processing/#crop) method can be replicated by [extract](https://sharp.pixelplumbing.com/api-resize#extract) in Sharp.

---

<div style="margin-bottom: 1em;">
  <img src='https://cdn.filestackcontent.com/ALjVIPyY5SBCdSTP1630Sz/rotate=deg:exif/crop=dim:[0,171,1024,683]/auto_image/compress/%22https://staging.compass.com/m/15/0f698adf-a7e5-4abd-b284-842076c2a053/origin.png%22' width="600">
  <img src='./example1Cropped.jpg' width="600">
</div>

<div>
  <img src='https://cdn.filestackcontent.com/ALjVIPyY5SBCdSTP1630Sz/rotate=deg:exif/crop=dim:[0,0,2621,1747]/output=format:png,density:500/auto_image/compress/%22https://www.compass.com/m/0/4c41c700-8fd4-4b04-90ce-95dcddc23894/origin.jpg%22' width="600">
  <img src='./example2Cropped.jpg' width="600">
</div>

## CMYK color model conversion

Sharp is able to convert PNG's to use CMYK, but cannot work with PDF's directly.

<div style="margin-bottom: 1em;">
  <img src='./cmyk-conversion/example1-original.jpg' width="600">
  <img src='./cmyk-conversion/example1-cmyk.jpg' width="600">
</div>
