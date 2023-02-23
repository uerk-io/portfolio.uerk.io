module.exports = {
    apps : [{
      name   : "uerk.io",
      script : "npm",
      args: "start",
      port : "8080",
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
  }