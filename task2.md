git init
git config --global user.name "aarsha Example"
git config --global user.email "aarsha@example.com"
echo "# Bookstore Project" > README.md
git add README.md
git commit -m "Add README with project title"
git remote add origin https://github.com/aarsha/bookstore.git
git push -u origin main
