# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to: **https://www.mongodb.com/cloud/atlas/register**
2. Sign up with:
   - Email and password, OR
   - Google account, OR
   - GitHub account

## Step 2: Create a Free Cluster

1. After login, click **"Build a Database"** or **"Create"**
2. Choose **"M0 FREE"** tier
3. Select:
   - **Cloud Provider**: AWS (recommended)
   - **Region**: Choose closest to your location (e.g., Mumbai for India, N. Virginia for US)
4. **Cluster Name**: You can keep default or name it "FAVcart-cluster"
5. Click **"Create"**

## Step 3: Create Database User

1. You'll see a "Security Quickstart" page
2. Under **"How would you like to authenticate your connection?"**
   - Choose **"Username and Password"**
   - Username: `favcart_user` (or your choice)
   - Password: Click **"Autogenerate Secure Password"** and **COPY IT** (or create your own)
   - Click **"Create User"**

⚠️ **IMPORTANT**: Save your username and password somewhere safe!

## Step 4: Add IP Address to Whitelist

1. Scroll down to **"Where would you like to connect from?"**
2. Click **"Add My Current IP Address"** 
3. **For development**, also add: **0.0.0.0/0** (allows connection from anywhere)
   - Click **"Add Entry"**
   - IP Address: `0.0.0.0/0`
   - Description: `Allow all (development only)`
4. Click **"Finish and Close"**

## Step 5: Get Your Connection String

1. Click **"Go to Database"**
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Select:
   - **Driver**: Node.js
   - **Version**: 4.1 or later
5. **COPY** the connection string (looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 6: Update Your Connection String

Replace `<username>` and `<password>` with your actual credentials:
```
mongodb+srv://favcart_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/favcart?retryWrites=true&w=majority
```

⚠️ **IMPORTANT CHANGES**:
- Replace `<username>` with your username (e.g., `favcart_user`)
- Replace `<password>` with your actual password
- Add `/favcart` after `.mongodb.net` (this is your database name)

**Example:**
```
mongodb+srv://favcart_user:Abc123XYZ@cluster0.abc123.mongodb.net/favcart?retryWrites=true&w=majority
```

## Step 7: Paste Connection String

I've already updated your `config.env` file with a placeholder. You need to:

1. Open: `backend/config/config.env`
2. Find the line: `DB_LOCAL_URI=`
3. Paste your full connection string there
4. Save the file

## Step 8: Seed the Database

After updating the connection string, run these commands:

```bash
# From the root FAVcart folder
npm run seeder
```

This will populate your database with product data!

## Step 9: Start Your Application

```bash
# Terminal 1 - Start Backend
npm start

# Terminal 2 - Start Frontend (in new terminal)
cd frontend
npm start
```

---

## ✅ Verification

Your MongoDB Atlas is working if you see:
- ✅ "MongoDB Connected" in your backend terminal
- ✅ Products displaying on localhost:3000
- ✅ No database connection errors

## 🆘 Troubleshooting

**Error: "MongooseServerSelectionError"**
- Check your IP whitelist (try adding 0.0.0.0/0)
- Verify username/password in connection string
- Ensure no special characters in password (or URL-encode them)

**Error: "Authentication failed"**
- Double-check username and password
- Password is case-sensitive
- Make sure you created the database user in Atlas

**Need Help?**
Let me know the exact error message and I'll help you fix it!
