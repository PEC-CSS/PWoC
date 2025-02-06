"use client"

import { useEffect, useRef } from "react"

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  wind: number
  opacity: number
}

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas : any = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const snowflakes: Snowflake[] = []
    let animationFrameId: number

    // Create snowflakes with varying properties
    function createSnowflakes() {
      const count = Math.floor(window.innerWidth * 0.15) // Responsive snowflake count

      for (let i = 0; i < count; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1, // Varying sizes
          speed: Math.random() * 2 + 1, // Varying speeds
          wind: Math.random() * 0.5 - 0.25, // Random wind effect
          opacity: Math.random() * 0.5 + 0.5, // Varying opacity
        })
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      snowflakes.length = 0 // Clear existing snowflakes
      createSnowflakes() // Recreate for new dimensions
    }

    function drawSnowflake(ctx: CanvasRenderingContext2D, snowflake: Snowflake) {
      ctx.beginPath()
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
      ctx.fill()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.forEach((snowflake) => {
        // Update position
        snowflake.y += snowflake.speed
        snowflake.x += snowflake.wind

        // Add slight wobble
        snowflake.x += Math.sin(snowflake.y / 50) * 0.5

        // Reset position when out of bounds
        if (snowflake.y > canvas.height) {
          snowflake.y = -5
          snowflake.x = Math.random() * canvas.width
        }
        if (snowflake.x > canvas.width) {
          snowflake.x = 0
        } else if (snowflake.x < 0) {
          snowflake.x = canvas.width
        }

        drawSnowflake(ctx, snowflake)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}

