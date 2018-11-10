const client = algoliasearch(
    'JK3JG9PIKK',
    '••••••••••••••••••••••••••••••••'
);

const index = client.initIndex('blog');

var postsJSON = require('./seach.json');

index.addObjects(postsJSON, function(err, content) {
    if (err) {
        console.error(err);
    }
});

index.setSettings({
    'customRanking': ['desc(followers)']
}, function(err, content) {
    console.log(content);
});

index.setSettings({
    'searchableAttributes': [
        'post_title',
        'categories',
        'tags'
    ]
}, function(err, content) {
    console.log(content);
});