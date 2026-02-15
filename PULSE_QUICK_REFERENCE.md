# SystemPulse Quick Reference

## Using the SystemPulse Component

### Basic Usage
```tsx
import { SystemPulse } from "@/components/SystemPulse";

export function MyComponent() {
  return (
    <SystemPulse 
      tone="green"
      size="md"
      ariaLabel="Service is running"
    />
  );
}
```

### In a Badge
```tsx
import { Badge } from "@/components/Badge";

<Badge tone="blue" pulse>
  deployment: active
</Badge>
```

### Inline with Text
```tsx
<div className="flex items-center gap-2">
  <SystemPulse tone="teal" size="sm" />
  <span>Streaming logs...</span>
</div>
```

---

## Props

| Prop | Type | Default | Options | Purpose |
|------|------|---------|---------|---------|
| `tone` | string | `"green"` | `"blue"` \| `"teal"` \| `"purple"` \| `"green"` | Color variant |
| `size` | string | `"md"` | `"sm"` \| `"md"` | Indicator size |
| `ariaLabel` | string | `"System status: active"` | Any string | Accessibility label |

---

## Size Variants

### `sm` (Small - 2.5px)
```tsx
<SystemPulse size="sm" />
// Use inline with text or in badges
```

### `md` (Medium - 3px)
```tsx
<SystemPulse size="md" />
// Use standalone or as primary indicator
```

---

## Color Variants

### `green` (Default - Active Services)
```tsx
<SystemPulse tone="green" />
```
RGB: 74, 222, 128 (healthy/running status)

### `blue` (Deployed Services)
```tsx
<SystemPulse tone="blue" />
```
RGB: 56, 189, 248 (deployment/monitoring)

### `teal` (Active Operations)
```tsx
<SystemPulse tone="teal" />
```
RGB: 45, 212, 191 (streams/live activity)

### `purple` (Experimental/Lab)
```tsx
<SystemPulse tone="purple" />
```
RGB: 167, 139, 250 (lab/experimental systems)

---

## Animation Details

- **Duration**: 2.0 seconds per cycle
- **Expansion**: 1x → 2.8x scale
- **Fade**: 65% opacity → 0%
- **Easing**: ease-out (natural deceleration)
- **Infinite**: Loops continuously
- **Motion Preference**: Respects `prefers-reduced-motion`

---

## Where It's Currently Used

1. **DeployedServices** - Badge: `traffic: normal`
2. **AutonomousSystemsLab** - Badge: `lab: active`
3. **ExecutionLogs** - Inline: Before each log entry

---

## Adding to New Locations

### Step 1: Import the component
```tsx
import { SystemPulse } from "../components/SystemPulse";
```

### Step 2: Render it
```tsx
<SystemPulse 
  tone="green"      // Choose appropriate color
  size="md"         // sm or md
  ariaLabel="..."   // Describe what's active
/>
```

### Step 3: Test
- Verify animation appears and loops
- Check it on smaller screens
- Test with `prefers-reduced-motion` enabled

---

## Best Practices

✅ **DO:**
- Use for "system is alive" indicators
- Pair with semantic labels/context
- Choose tone that matches system state
- Use `sm` inline with text
- Use `md` for prominent indicators
- Provide meaningful `ariaLabel`

❌ **DON'T:**
- Use on every element (only for status indicators)
- Add to non-active/off services
- Change colors arbitrarily
- Remove aria-labels
- Add multiple pulses in one spot
- Use instead of proper status badges

---

## Accessibility Notes

### For Developers
- Always provide an `ariaLabel`
- Use `role="status"` (auto-included)
- Never hide the indicator from screen readers
- Pair with text description

### For Users
- Animation pauses if reduced motion is enabled
- Static dot is still visible
- Dot color indicates status
- No meaning relies on motion alone

---

## Customization

### Changing Animation Speed (Global)
Edit [tailwind.config.js](tailwind.config.js):
```javascript
'system-pulse': 'systemPulse 2s ease-out infinite',
                           // ^ change duration here
```

### Changing Scale Range (Global)
Edit [tailwind.config.js](tailwind.config.js):
```javascript
systemPulse: {
  '70%': {
    transform: 'scale(2.8)',  // increase for more dramatic
    opacity: '0',
  },
},
```

### Creating New Color Variant (Example)
Add to [tailwind.config.js](tailwind.config.js):
```javascript
// In theme.extend.colors
orange: 'rgb(var(--cc-orange) / <alpha-value>)',
```

Then use:
```tsx
<SystemPulse tone="orange" />
```

---

## Troubleshooting

### Pulse not animating?
- Check `prefers-reduced-motion` is not enabled
- Verify Tailwind build includes `animate-system-pulse`
- Ensure component is rendering (`{pulse && tone !== "neutral"}`)

### Pulse not visible?
- Try size "md" instead of "sm"
- Choose a brighter `tone` (green > blue > purple)
- Verify container has proper contrast

### Performance issues?
- Limit to <5 pulses per page
- Use `sm` size when possible
- Verify GPU acceleration is enabled

---

## Component API

```typescript
type SystemPulseProps = {
  tone?: "blue" | "teal" | "purple" | "green";
  size?: "sm" | "md";
  ariaLabel?: string;
};

// Returns: JSX.Element with:
// - Semantic HTML (role="status")
// - Animated ring (scale 1→2.8)
// - Static center dot
// - Accessibility attributes
```

---

## Further Reading

- [PULSE_IMPLEMENTATION.md](PULSE_IMPLEMENTATION.md) - Full implementation guide
- [PULSE_VISUAL_REFERENCE.md](PULSE_VISUAL_REFERENCE.md) - Animation diagrams
- [PULSE_CHECKLIST.md](PULSE_CHECKLIST.md) - Verification checklist

