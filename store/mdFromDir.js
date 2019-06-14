const slugify = require( "slugify" )
const fs = require( "fs" )
const fm = require( "front-matter" )

export default ( directory ) => {
  return fs.readdirSync( `./pages/${directory}` ).filter( file => file !== 'index.vue' ).map( file => {
    let parsed = {
      ...fm( fs.readFileSync( `./pages/${directory}/${file}`, "utf8" ) ),
      filename: file,
      get created( ) {
        return new Date(
          fs.statSync( `./pages/${directory}/${file}`, "utf8" ).ctime
        )
      },
      get slug( ) {
        return slugify( file.replace( /\.vue$/, "" ), { lower: true } )
      },
      get href( ) {
        return `/${directory}/${this.slug}`
      }
    }
    delete parsed.body
    delete parsed.frontmatter
    return parsed
  } )
}
