const slugify = require( "slugify" )
const fs = require( "fs" )
const fm = require( "front-matter" )
const dirTree = require( "directory-tree" )

export default ( directory ) => {

  let docsTree = dirTree( `./pages/${directory}`, { attributes: ["mtime"] } )
  let flatArr = [ ]

  function parseItem( treeItem ) {
    if ( treeItem.type === 'file' ) {
      try {
        let { attributes } = fm( fs.readFileSync( './' + treeItem.path, "utf8" ) )
        treeItem.attributes = attributes
        treeItem.name = attributes.title || treeItem.name
        let pathElms = treeItem.path.split( '/' )
        pathElms[ pathElms.length - 1 ] = slugify( pathElms[ pathElms.length - 1 ].replace( /\.vue$/, "" ), { lower: true } )
        treeItem.slug = pathElms.join( '/' ).replace( 'pages/', "/" ).toLowerCase( )
        flatArr = [ ...flatArr, treeItem ]
      } catch {}
    } else {
      treeItem.children.forEach( kid => parseItem( kid ) )
      try {
        treeItem.slug = treeItem.children[ 0 ].slug
      } catch {}
    }
  }

  docsTree.children.forEach( kid => parseItem( kid ) )

  return { docsTree, flatArr }
}
