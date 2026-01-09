MVP Goal
A user can compose a workspace of resizable web panels and persist the layout.

Build a barebones canvas
Add draggable/resizable iframe panels
Test embedding:
Self-hosted Grafana
Public sites that allow framing
Document which sites fail and why

Design a wireframe
Define a strict MVP feature list
Pick libraries and folder structure
Validate whether Discord or Slack is worth integrating first based on API effort

+------------------------------------------------+
| Top Bar                                        |
| [Add Panel] [Save Layout] [Load Layout]        |
+------------------------------------------------+
|                                                |
|  +-------------+   +-----------------------+  |
|  |  Grafana    |   |      Chat Panel       |  |
|  |  iframe     |   |  (Discord / Slack)    |  |
|  |             |   |                       |  |
|  +-------------+   +-----------------------+  |
|                                                |
|  +-------------------------------------------+ |
|  |           Secondary Panel                 | |
|  +-------------------------------------------+ |
|                                                |

Workspace

Single canvas

Infinite or bounded workspace

Panels

Add panel by URL

Render via iframe

Drag

Resize

Bring to front / focus

Close panel

Layout Persistence

Save layout to local storage

Reload on page refresh

UI

Minimal top bar

No auth

No accounts

No sharing

Constraints

Only sites that allow iframe embedding

No Slack / Discord integration yet