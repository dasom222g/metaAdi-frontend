const enum Align {
  left,
  center,
  right,
}

export type AlignType = keyof typeof Align

export const enum Wallet {
  META_MASK,
  WALLET_CONNECT,
}

export interface WalletType {
  id: number
  type: keyof typeof Wallet
  title: string
}
