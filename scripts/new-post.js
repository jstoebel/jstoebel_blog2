const yargs = require('yargs');
const nunjucks = require('nunjucks');
const slugify = require('slugify');
const dateFormat = require('date-fns/format');
const fs = require('fs');

nunjucks.configure('scripts');



const argv = yargs
  .option('title', {
    alias: 't',
    describe: 'title of Post'
  })
  .demandOption(['title'], 'Please provide a post title')
  .help()
  .argv


const postTitle = argv.title;
const slug = slugify(postTitle, {lower: true});
const fileName = `${slug}.md`

const output = nunjucks.render('post-template.md', {
  path: `/${slug}`,
  dateStr: dateFormat(new Date, 'yyyy-MM-dd'),
  postTitle
})

fs.writeFileSync(`src/content/markdown/posts/${fileName}`, output)

console.log(`created file ${fileName}`);


