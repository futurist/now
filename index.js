var performance = typeof window !== 'undefined' && window.performance
var hrtime = typeof process !== 'undefined' && process
  && typeof process.hrtime === 'function' && process.hrtime

function now() {
  if(performance!==false) return performance.now()
  else if(hrtime!==false) {
    var t = hrtime()
    return (t[0] + t[1] / 1e9) * 1000
  } else {
    return Date.now()
  }
}

module.exports = now

