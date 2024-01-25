import { sign, verify } from 'jsonwebtoken';

export default async function handler(req, res) {
    const { method } = req;
    
    switch (method) {
        case 'POST':
        try {
            const { username, password } = req.body;
            const token = sign({ username, password }, process.env.JWT_SECRET, {
            expiresIn: '1h',
            });
            res.status(200).json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
        break;
        case 'GET':
        try {
            const { token } = req.query;
            const decoded = verify(token, process.env.JWT_SECRET);
            res.status(200).json({ decoded });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
        break;
        default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}