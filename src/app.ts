import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDB, disconnectDB } from "@/config";

loadEnv();