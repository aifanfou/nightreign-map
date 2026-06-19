Add-Type -AssemblyName System.Drawing
$dir = "d:\xuangmu\trea\automated-seed-finder\public\Images\pattern"
$files = Get-ChildItem -Path $dir -Filter "*.jpg"
$total = $files.Count
$i = 0
foreach ($file in $files) {
    $i++
    $src = [System.Drawing.Image]::FromFile($file.FullName)
    if ($src.Width -eq 1536 -and $src.Height -eq 1536) {
        $src.Dispose()
        continue
    }
    $bmp = New-Object System.Drawing.Bitmap(1536, 1536)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, 1536, 1536)
    $g.Dispose()
    $src.Dispose()
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)
    $bmp.Save($file.FullName, $enc, $params)
    $bmp.Dispose()
    if ($i % 50 -eq 0) { Write-Host "Processed $i / $total" }
}
Write-Host "Done! Total: $total"
