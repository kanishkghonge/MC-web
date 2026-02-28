$htmlFiles = Get-ChildItem -Path "c:\Users\kanis\Desktop\Main\GitHub\MC-web" -Filter *.html -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content

    # Remove Calculator from nav/links
    $newContent = $newContent -replace '(?i)\s*<li>\s*<a href="[^"]*clinic-calculator\.html"(?: class="[^"]*")?>\s*Calculator\s*</a>\s*</li>', ''
    
    # Remove Clinic Calculator from products footer
    $newContent = $newContent -replace '(?i)\s*<li>\s*<a href="[^"]*clinic-calculator\.html"[^>]*>\s*Clinic Calculator\s*</a>\s*</li>', ''
    
    # Replace Blogs with Resources in nav/links
    $newContent = [System.Text.RegularExpressions.Regex]::Replace($newContent, '(?i)<li>\s*<a href="([^"]*blogs\.html)"([^>]*)>\s*Blogs\s*</a>\s*</li>', '<li><a href="$1"$2>Resources</a></li>')

    if ($newContent -cne $content) {
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
        Write-Host "Updated $($file.FullName)"
    }
}
