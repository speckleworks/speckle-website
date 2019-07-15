const slugify = require( "slugify" )
const fs = require( "fs" )
const fm = require( "front-matter" )
const dirTree = require( "directory-tree" )

export default ( directory ) => {

  let docsTree = dirTree( `./pages/${directory}`, { attributes: [ "mtime" ], extensions: /\.vue/ } )
  let flatArr = [ ]

  function parseItem( treeItem ) {
    if ( treeItem.type === 'file' ) {
      try {
        let { attributes } = fm( fs.readFileSync( './' + treeItem.path, "utf8" ) )
        treeItem.attributes = attributes
        treeItem.name = attributes.title || treeItem.name

        let pathElms = treeItem.path.split( '/' )
        // Fix for Windows systems. May break others.
        if(pathElms.length === 1 ) pathElms = treeItem.path.split('\\')
        pathElms[ pathElms.length - 1 ] = slugify( pathElms[ pathElms.length - 1 ].replace( /\.vue$/, "" ), { lower: true } )
        treeItem.slug = pathElms.join( '/' ).replace( 'pages/', "/" ).toLowerCase( )

        treeItem.attributes.order = treeItem.attributes.order || 0

        flatArr = [ ...flatArr, treeItem ]
      } catch {}
    } else {
      // treeItem.
      treeItem.children.forEach( kid => parseItem( kid ) )
      try {
        treeItem.children = treeItem.children.sort( ( a, b ) => a.attributes.order - b.attributes.order )
      } catch {}
      try {
        treeItem.slug = treeItem.children[ 0 ].slug
        treeItem.attributes = { order: 100 }
      } catch {}
    }
  }

  docsTree.children.forEach( kid => parseItem( kid ) )
  try {
    docsTree.children = docsTree.children.sort( ( a, b ) => a.attributes.order - b.attributes.order )
  } catch (err) {
    console.log( err )
  }

  return { docsTree, flatArr }
}
