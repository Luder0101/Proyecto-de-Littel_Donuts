# index.js
cat > src/index.js <<'EOF'
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('API Donas running'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening ${PORT}`));
EOF

# rutas auth.js (archivo básico, luego lo completamos)
cat > src/routes/auth.js <<'EOF'
const express = require('express');
const router = express.Router();

// endpoints mínimos (los completaremos más adelante)
router.get('/ping', (req, res) => res.json({ ok: true }));
module.exports = router;
EOF